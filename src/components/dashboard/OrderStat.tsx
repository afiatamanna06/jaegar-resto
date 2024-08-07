import OrderCard from "./OrderCard";
import { orderData } from "./OrderCardData";

const OrderStat = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-8 w-full mb-8">
      {orderData.slice(0, 3).map(({ title, amount, rate, up, icon, color }) => (
        <OrderCard
          key={title}
          title={title}
          amount={amount}
          rate={rate}
          up={up}
          icon={icon}
          color={color}
        />
      ))}
    </div>
  );
};

export default OrderStat;
