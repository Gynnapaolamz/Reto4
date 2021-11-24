using System
namespace restauranteeApi.Models
{
    public class Comentarios
    {
        public int idComentarios { get; set; }
        public string cliente { get; set; }
        public string texto { get; set; }
        public DateTime  fecha { get; set; }
        public string calificacion { get; set; }
    }
}
