import { offers } from "../data/offers";

export const Offers = (props) => {
  return (
    <section>
      <h3> {props.title}</h3>
      <ol>
        {offers.map((offer) => (
          <li key = {offer.title}>
            <span>{offer.title} | cena: {offer.price}&nbsp;PLN</span>
          </li>
        ))}
      </ol>
    </section>
  );
};
