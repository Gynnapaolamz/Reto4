namespace WebApplication1.Models
{
    public class Plato
    {
       

        public int id { get; set; }
        public string titulo { get; set; }
        public string urlImagen { get; set; }
        public string descripcion { get; set; }
        public int valor { get; set; }
        public int Restaurante_Id { get; set; }
    }
}
