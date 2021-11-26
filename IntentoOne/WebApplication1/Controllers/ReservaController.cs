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
    public class ReservaController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public ReservaController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        //CONSULTA
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                        select id, fecha, Cliente_id, Servicio_id, estado
                        from 
                        Reserva
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
        [HttpGet("{Cliente_id}/{Servicio_id}")]

        public JsonResult Get(int Cliente_id, int Servicio_id)
        {
            string query = @"
                        select id,fecha, Cliente_id, Servicio_id, estado
                        from Reserva re
                        where re.Cliente_id = @Cliente_id and re.Servicio_id=@Servicio_id;
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@Cliente_id", Cliente_id);
                    myCommand.Parameters.AddWithValue("@Servicio_id", Servicio_id);
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
                        delete from Reserva 
                        where id=@ReservaId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ReservaId", id);

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
        public JsonResult Put(Reserva rese, int id)
        {
            string query = @"
                        update Reserva set 
                        fecha =@ReservaFecha,
                        Servicio_id =@ReservaServicioId,
                        Cliente_id =@ReservaClienteId,
                        estado = @ReservaEstado
                        where id =@ReservaId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ReservaId", rese.id);
                    myCommand.Parameters.AddWithValue("@ReservaFecha", rese.fecha);
                    myCommand.Parameters.AddWithValue("@ReservaClienteId", rese.Cliente_id);
                    myCommand.Parameters.AddWithValue("@ReservaServicioId", rese.Servicio_id);
                    myCommand.Parameters.AddWithValue("@ReservaEstado", rese.estado);

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
        public JsonResult Post(Models.Reserva res)
        {
            string query = @"
                        insert into Reserva 
                        (fecha,Cliente_id,Servicio_id,estado) 
                        values
                         (@ReservaFecha,@ReservaCliente_id,@ReservaServicio_id,@ReservaEstado) ;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@ReservaFecha", res.fecha);
                    myCommand.Parameters.AddWithValue("@ReservaCliente_id", res.Cliente_id);
                    myCommand.Parameters.AddWithValue("@ReservaServicio_id", res.Servicio_id);
                    myCommand.Parameters.AddWithValue("@ReservaEstado", res.estado);
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