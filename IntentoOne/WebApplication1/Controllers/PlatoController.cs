using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
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

        //CONSULTA
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                        select id,titulo,descripcion,urlImagen,valor,Restaurante_id
                        from 
                        Plato
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

        //CONSULTA
        [HttpGet("{id}")]

        public JsonResult Get(int id)
        {
            string query = @"
                        select id,titulo,descripcion,urlImagen,valor,Restaurante_id
                        from Plato
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

            return new JsonResult(table);
        }

        //ELIMINACION
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                        delete from Plato 
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


        [HttpPut("{id}")]
        public JsonResult Put(Plato pla, int id)
        {
            string query = @"
                        update Plato set 
                        titulo =@PlatoTitulo,
                        descripcion =@PlatoDescripcion,
                        valor =@PlatoValor,
                        urlImagen =@PlatourlImagen,
                        Restaurante_id=@PlatoRestauranteId
                        where id =@PlatoId;
                        
            ";
            //id,titulo,descripcion,urlImagen,valor,Restaurante_id
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@PlatoId", pla.id);
                    myCommand.Parameters.AddWithValue("@PlatoTitulo", pla.titulo);
                    myCommand.Parameters.AddWithValue("@PlatoDescripcion", pla.descripcion);
                    myCommand.Parameters.AddWithValue("@PlatoValor", pla.valor);
                    myCommand.Parameters.AddWithValue("@PlatourlImagen,", pla.urlImagen);
                    myCommand.Parameters.AddWithValue("@PlatoRestauranteId", pla.Restaurante_Id);

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
        public JsonResult Post(Models.Plato pla)
        {
            string query = @"
                        insert into Plato 
                        (titulo,descripcion,urlImagen,valor,Restaurante_id) 
                        values
                         (@PlatoTitulo,@PlatoDescripcion,@PlatourlImagen,@PlatoValor,@PlatoRestauranteId) ;       
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@PlatoTitulo", pla.titulo);
                    myCommand.Parameters.AddWithValue("@PlatoDescripcion", pla.descripcion);
                    myCommand.Parameters.AddWithValue("@PlatoValor", pla.valor);
                    myCommand.Parameters.AddWithValue("@PlatourlImagen,", pla.urlImagen);
                    myCommand.Parameters.AddWithValue("@PlatoRestauranteId", pla.Restaurante_Id);

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
