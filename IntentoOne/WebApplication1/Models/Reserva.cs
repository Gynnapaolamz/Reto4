using System;
namespace WebApplication1.Models
{
    public class Reserva
    {
        public int id { get; set; }
        public DateTime fecha { get; set; }
        public int Cliente_id { get; set; }
        public int Servicio_id { get; set; }
    }
}
