using System;

namespace WebApplication1.Models
{
    public class Pedido
    {
        public int id { get; set; }
        public DateTime fecha { get; set; }
        public string Plato_id { get; set; }
        public string Cliente_id { get; set; }
    }
}
