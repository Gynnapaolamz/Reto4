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
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"
                        select id,nombre,descripcion,imagen,precio,Restaurante_id
                        from Plato where id=@Restaurante_id;
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


        [HttpPut]
        public JsonResult Put(Plato pla)
        {
            string query = @"
                        update Plato set 
                        nombre =@PlatoNombre,
                        descripcion =@PlatoDescripcion,
                        precio =@PlatoPrecio,
                        imagen =@PlatoImagen,
                        Restaurante_id=@PlatoRestauranteId
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
                    myCommand.Parameters.AddWithValue("@PlatoId", pla.id);
                    myCommand.Parameters.AddWithValue("@PlatoNombre", pla.nombre);
                    myCommand.Parameters.AddWithValue("@PlatoDescripcion", pla.descripcion);
                    myCommand.Parameters.AddWithValue("@PlatoPrecio", pla.precio);
                    myCommand.Parameters.AddWithValue("@PlatoImagen", pla.imagen);
                    myCommand.Parameters.AddWithValue("@PlatoRestauranteId", pla.restaurante_Id);

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
                        (nombre,descripcion,precio,imagen,Restaurante_id) 
                        values
                         (@PlatoNombre,@PlatoDescripcion,@PlatoImagen,@PlatoPrecio,@PlatoRestauranteId) ;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ServicioNombre", pla.nombre);
                    myCommand.Parameters.AddWithValue("@ServicioImagen", pla.imagen);
                    myCommand.Parameters.AddWithValue("@ServicioDescripcion", pla.descripcion);
                    myCommand.Parameters.AddWithValue("@PlatoPrecio", pla.precio);
                    myCommand.Parameters.AddWithValue("@PlatoImagen", pla.imagen);
                    myCommand.Parameters.AddWithValue("@PlatoRestauranteId", pla.restaurante_Id);

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
