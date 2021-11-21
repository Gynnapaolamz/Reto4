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
    public class EmpleadoController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public EmpleadoController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }


        //CONSULTA
        [HttpGet("{id]")]
        public JsonResult Get(int id)
        {
            string query = @"
                        select id,nombre,descripcion,imagen,Restaurante_id
                        from 
                        Empleado where id=@EmpleadoId;
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
                        delete from Empleado 
                        where id=@EmpleadoId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@EmpleadoId", id);

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
        public JsonResult Put(Empleado emp)
        {
            string query = @"
                        update Empleado set 
                        nombre =@EmpleadosNombre,
                        descripcion =@EmpleadosDescripcion,
                        imagen =@EmpleadosImagen,
                        restaurante_id =@EmpleadosRestauranteId
                        where id =@EmpleadosId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@EmpleadosId", emp.id);
                    myCommand.Parameters.AddWithValue("@EmpleadosNombre", emp.nombre);
                    myCommand.Parameters.AddWithValue("@EmpleadosDescripcion", emp.descripcion);
                    myCommand.Parameters.AddWithValue("@EmpleadosImagen", emp.imagen);
                    myCommand.Parameters.AddWithValue("@EmpleadosRestauranteId", emp.Restaurante_Id);

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
        public JsonResult Post(Models.Empleado emp)
        {
            string query = @"
                        insert into Empleado 
                        (nombre,descripcion,imagen,Restaurante_id) 
                        values
                         (@EmpleadosNombre,@EmpleadosDescripcion,@EmpleadosImagen,@EmpleadosRestauranteId) ;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@EmpleadosNombre", emp.nombre);
                    myCommand.Parameters.AddWithValue("@EmpleadosImagen", emp.imagen);
                    myCommand.Parameters.AddWithValue("@EmpleadosDescripcion", emp.descripcion);
                    myCommand.Parameters.AddWithValue("@EmpleadosRestauranteId", emp.Restaurante_Id);

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
