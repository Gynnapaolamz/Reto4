using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using restauranteeApi.Models;

namespace restauranteeApi.Controllers
{
    [Route("api/comentarios[controller]")]
    [ApiController]
    public class ComentariosController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public ComentariosController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {

            string query = @"
                         select idComentarios, cliente, texto, fecha, calificacion
                         from 
                         comentarios
        ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpDelete("{idComentarios}")]
        public JsonResult Delete(int idComentarios)
        {
            string query = @"
                        delete from comentarios 
                        where idComentarios=@ComentariosId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ComentariosId", idComentarios);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

        //ACTUALIZACIÓN


        [HttpPut]
        public JsonResult Put(Comentarios com)
        {
            string query = @"
                        update Comentarios set 
                        cliente =@ComentariosCliente,
                        texto =@ComentariosTexto,
                        fecha =@ComentariosFecha,
                        calificacion =@ComentariosCalificacion
                        where idComentarios =@ComentariosId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ComentariosId", com.idComentarios);
                    myCommand.Parameters.AddWithValue("@ComentariosCliente", com.cliente);
                    myCommand.Parameters.AddWithValue("@ComentariosTexto", com.texto);
                    myCommand.Parameters.AddWithValue("@ComentariosFecha", com.fecha);
                    myCommand.Parameters.AddWithValue("@ComentariosCalificacion", com.calificacion);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }
        //CREACIÓN

        [HttpPost]
        public JsonResult Post(Models.Comentarios com)
        {
            string query = @"
                        insert into comentarios 
                        (cliente, texto, fecha, calificacion) 
                        values
                         (@ComentariosCliente,@ComentariosTexto, @ComentariosFecha, @ComentariosCalificacion) ;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ComentariosCliente", com.cliente);
                    myCommand.Parameters.AddWithValue("@ComentariosTexto", com.texto);
                    myCommand.Parameters.AddWithValue("@ComentariosFecha", com.fecha);
                    myCommand.Parameters.AddWithValue("@ComentariosCalificacion", com.calificacion);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    mycon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }
    }
}

