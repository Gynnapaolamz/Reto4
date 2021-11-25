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
    public class PedidoController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public PedidoController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        //CONSULTA
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                        select id, fecha, Plato_id, Cliente_id
                        from 
                        Pedido
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
        [HttpGet("{Cliente_id}/{Plato_id}")]

        public JsonResult Get(int Cliente_id, int Plato_id)
        {
            string query = @"
                        select id, fecha 
                        from Pedido pd 
                        where pd.Cliente_id = @Cliente_id and pd.Plato_id=@Plato_id;
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
                    myCommand.Parameters.AddWithValue("@Plato_id", Plato_id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult(table);
        }

        //ELIMINACION
        [HttpDelete("{Cliente_id}/{Plato_id}")]
        public JsonResult Delete(int Cliente_id, int Plato_id)
        {
            string query = @"
                        delete from Pedido pd 
                        where pd.Cliente_id = @Cliente_id and pd.Plato_id=@Plato_id;
                        
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
                    myCommand.Parameters.AddWithValue("@Plato_id", Plato_id);

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
        public JsonResult Put(Pedido pedi, int id)
        {
            string query = @"
                        update Pedido set 
                        fecha =@PedidoFecha,
                        Plato_id =@PedidoPlatoId,
                        Cliente_id =@PedidoClienteId
                        where id =@PedidoId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@PedidoId", pedi.id);
                    myCommand.Parameters.AddWithValue("@PedidoFecha", pedi.fecha);
                    myCommand.Parameters.AddWithValue("@PedidoPlatoId", pedi.Plato_id);
                    myCommand.Parameters.AddWithValue("@PedidoClienteId", pedi.Cliente_id);

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
        public JsonResult Post(Models.Pedido ped)
        {
            string query = @"
                        insert into Pedido 
                        (fecha,Plato_id,Cliente_id) 
                        values
                         (@PedidoFecha,@PedidoPlato_id,@PedidoCliente_id) ;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@PedidoFecha", ped.fecha);
                    myCommand.Parameters.AddWithValue("@PedidoPlato_id", ped.Plato_id);
                    myCommand.Parameters.AddWithValue("@PedidoCliente_id", ped.Cliente_id);

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