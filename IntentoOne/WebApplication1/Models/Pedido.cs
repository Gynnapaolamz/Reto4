//using System;

namespace WebApplication1.Models
{
    public class Pedido
    {
        public int id { get; set; }
        public string fecha { get; set; }
        public int Plato_id { get; set; }
        public int Cliente_id { get; set; }
    }
}
