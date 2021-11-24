namespace restauranteeApi.Models
{
    public class Pedido
    {
        public int idPedido { get; set; }
        public int idCliente { get; set; }
        public int idPlato { get; set; }
        public int cantidad { get; set; }
        public int total { get; set; }
    }
}
