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
    [Route("api/plato[controller]")]
    [ApiController]
    public class PlatoController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public PlatoController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {

            string query = @"
                         select id, nombre, descripcion, imagen, precio
                         from 
                         plato
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

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                        delete from plato 
                        where id=@PlatoId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@PlatoId", id);

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
        public JsonResult Put(Plato emp)
        {
            string query = @"
                        update Plato set 
                        nombre =@PlatoNombre,
                        descripcion =@PlatoDescripcion,
                        imagen =@PlatoImagen,
                        precio =@PlatoPrecio,
                        where id =@PlatoId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@PlatoId", emp.id);
                    myCommand.Parameters.AddWithValue("@PlatoNombre", emp.nombre);
                    myCommand.Parameters.AddWithValue("@PlatoDescripcion", emp.descripcion);
                    myCommand.Parameters.AddWithValue("@PlatoImagen", emp.imagen);
                    myCommand.Parameters.AddWithValue("@PlatoPrecio", emp.precio);

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
        public JsonResult Post(Models.Plato emp)
        {
            string query = @"
                        insert into plato
                        (nombre,descripcion, imagen, precio ) 
                        values
                         (@PlatoNombre,@PlatoDescripcion, @PlatoImagen, @PlatoPrecio) ;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@PlatoNombre", emp.nombre);
                    myCommand.Parameters.AddWithValue("@PlatoDescripcion", emp.descripcion);
                    myCommand.Parameters.AddWithValue("@EmpleadosImagen", emp.imagen);
                    myCommand.Parameters.AddWithValue("@PlatoPrecio", emp.precio);

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

