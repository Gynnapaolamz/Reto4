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
    [Route("api/pedido[controller]")]
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

        [HttpGet]
        public JsonResult Get()
        {

            string query = @"
                         select idPedido, idCliente, idPlato, cantidad, total
                         from 
                         pedido
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

        [HttpDelete("{idPedido}")]
        public JsonResult Delete(int idPedido)
        {
            string query = @"
                        delete from pedido 
                        where idPedido=@PedidoId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@PedidoId", idPedido);

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
        public JsonResult Put(Pedido ped)
        {
            string query = @"
                        update pedido set 
                        idCliente =@PedidoCliente,
                        idPlato =@PedidoPlato,
                        cantidad =@PedidoCantidad,
                        total =@PedidoTotal,
                        where idPedido =@PedidoId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@PedidoId", ped.idPedido);
                    myCommand.Parameters.AddWithValue("@PedidoCliente", ped.idCliente);
                    myCommand.Parameters.AddWithValue("@PedidoPlato", ped.idPlato);
                    myCommand.Parameters.AddWithValue("@PedidoCantidad", ped.cantidad);
                    myCommand.Parameters.AddWithValue("@PedidoTotal", ped.total);

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
                        (idCliente,idPlato, cantidad, total) 
                        values
                         (@PedidoCliente,@PedidoPlato, @EmpleadosImagen) ;
                        
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
                    myCommand.Parameters.AddWithValue("@Empleadoscargo", emp.cargo);
                    myCommand.Parameters.AddWithValue("@EmpleadosImagen", emp.imagen);

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

