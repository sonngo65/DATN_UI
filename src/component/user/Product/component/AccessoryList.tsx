import { Accessory } from "../../../../model";
interface AccessoryList {
  accessories: Accessory[];
}
export default function AccessoryList({ accessories }: AccessoryList) {
  return (
    <div className="accessory ">
      <ul className="accessory-ls list-type-none">
        {accessories.map((accessory) => {
          return (
            <li className="accessory-it">
              <a href="#" className="accessory-li">
                <div className="img-box">
                  {" "}
                  <img src={accessory.img} alt={accessory.name} />
                </div>
                <p> {accessory.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
