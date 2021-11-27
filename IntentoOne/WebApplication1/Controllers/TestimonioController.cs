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
    public class TestimonioController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public TestimonioController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                        select id,user,spanDescripcion,imgSrc,Cliente_id
                        from Testimonios
                       
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
                        select id,user,spanDescripcion,imgSrc,Cliente_id
                        from Testimonios
                        where id=@TestimoniosId;
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@TestimoniosId", id);

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
                        delete from Testimonios
                        where id=@TestimoniosId;
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@TestimoniosId", id);

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
        public JsonResult Put(Testimonio test, int id)
        {
            string query = @"
                        update Testimonios set 
                        user =@Testimoniosuser,
                        spanDescripcion =@TestimoniosspanDescripcion,
                        imgSrc =@TestimoniosimgSrc,
                        Cliente_id =@TestimoniosCliente_id
                        where id =@TestimoniosId;
                        
            ";
            //id,user,spanDescripcion,imgSrc,Cliente_id
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@TestimoniosId", test.id);
                    myCommand.Parameters.AddWithValue("@Testimoniosuser", test.user);
                    myCommand.Parameters.AddWithValue("@TestimoniosspanDescripcion", test.spanDescripcion);
                    myCommand.Parameters.AddWithValue("@TestimoniosimgSrc", test.imgSrc);
                    myCommand.Parameters.AddWithValue("@TestimoniosCliente_id", test.Cliente_id);

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
        public JsonResult Post(Models.Testimonio test)
        {
            string query = @"
                        insert into Testimonios
                        (user,spanDescripcion,imgSrc,Cliente_id) 
                        values
                         (@Testimoniosuser,@TestimoniosspanDescripcion,@TestimoniosimgSrc,@TestimoniosCliente_id);
                        
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TestAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@Testimoniosuser", test.user);
                    myCommand.Parameters.AddWithValue("@TestimoniosspanDescripcion", test.spanDescripcion);
                    myCommand.Parameters.AddWithValue("@TestimoniosimgSrc", test.imgSrc);
                    myCommand.Parameters.AddWithValue("@TestimoniosCliente_id", test.Cliente_id);

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
