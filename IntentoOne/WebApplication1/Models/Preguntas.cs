using System;

namespace WebApplication1.Models
{
    public class Preguntas
    {
        public int id { get; set; }
        public int Cliente_id { get; set; }
        public string descripcion { get; set; }
        public DateTime fecha { get; set; }
        
    }
}
