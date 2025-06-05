import React from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Cart({cartItems, add, minus}) {
  const totalPrice = cartItems.reduce(
    (sum, product) => sum + product.price*product.number, 0
  );
  const buy = ()=>{
    alert("Дякую за замовлення")
  }
  return (
    <div  id="corzuna">
    <Alert variant="success">
      <Alert.Heading>AnimeShop</Alert.Heading>
      {cartItems.length === 0 && <p>Замовлень немає</p>}
      <table width="100%">
        <tr>
          <td width="25%">назва</td>
          <td width="25%">кількість</td>
          <td width="25%">ціна</td>
          <td width="25%">сумма</td>
        </tr>
        {cartItems.map(product=>
          <tr key={product.id}>
          <td width="25%">{product.name}</td>
          <td width="25%"> 
            <Button variant="danger" onClick={()=> minus(product)}>-</Button>
            {product.number}
            <Button variant="success" onClick={()=> add(product)}>+</Button>
            </td>
          <td width="25%">{product.price}USD</td>
          <td width="25%">{product.price*product.number}USD</td>
        </tr>
        )}
      </table>
      <hr />
      <p className="mb-0">
        Сума до сплати {totalPrice}USD
        <br />
        {cartItems.length > 0 && <Button variant="warning" onClick={buy}>Зомовити</Button>}
        <br />
        Наш сайт зроблений для того щоб без проблем дивитися аніме з любою озвучкою, жанром, форматом (мається на увазі дитяче ,підліткове і доросле).
        <br />
        Якщо ви бачете цей напис це означає що покищо це всі аніме які є в нас на сайті.
      </p>
    </Alert>
    </div>
  );
}
