using System;
namespace WebApplication1.Models
{
    public class Reserva
    {
        public int id { get; set; }
        public DateTime fecha { get; set; }
        public string Cliente_id { get; set; }
        public string Servicio_id { get; set; }
    }
}
