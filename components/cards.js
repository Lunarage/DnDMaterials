import styles from "../styles/Home.module.css";

export function Page(props) {
  return <div className={styles.page}>{props.children}</div>;
}

function Card(props) {
  let classes = styles.card
  if(props.rarity == "uncommon") {
    classes = classes + " " + styles.uncommon;
  } else if (props.rarity == "rare") {
    classes = classes + " " + styles.rare;
  } else if (props.rarity == "very rare") {
    classes = classes + " " + styles.veryrare;
  } else if (props.rarity == "legendary") {
    classes = classes + " " + styles.legendary;
  } else {
    classes = classes + " " + styles.common;
  }
  return <div className={classes}>{props.children}</div>;
}

export function EmptyPage() {
  return (
    <div className={styles.page}>
      <Empty></Empty>
      <Empty></Empty>
      <Empty></Empty>
      <Empty></Empty>
      <Empty></Empty>
      <Empty></Empty>
      <Empty></Empty>
      <Empty></Empty>
    </div>
  );
}

export function Spell(props) {

}

export function Trait(props) {

  return (
    <Card rarity={props.rarity} >

    </Card>
  );
}

export function Weapon(props) {
  return (
    <Card rarity={props.weapon.rarity}>
      <div className={styles.card_row_header}>
        <span className={styles.card_header}>{props.weapon.name}</span>
        <span className={styles.card_type}>{props.weapon.weapon_type}</span>
      </div>
      {props.weapon.attunement && (
        <div className={styles.card_row_header}>
          <span className={styles.card_attunement}>Requires Attunement</span>
        </div>
      )}
      <div className={styles.card_table}>
        <div>
          <span className={styles.card_category}>Damage</span>
          <span className={styles.card_property}>{props.weapon.damage}</span>
        </div>
        <div>
          <span className={styles.card_category}>Damage Type</span>
          <span className={styles.card_property}>
            {props.weapon.damage_type}
          </span>
        </div>
      </div>
      <div
        className={styles.card_image}
        style={{ backgroundImage: "url(" + props.weapon.image + ")" }}
      >
        <div
          style={{
            backgroundImage:
              "url(" +
              props.weapon.dice +
              "),url(" +
              props.weapon.damage_type_image +
              ")",
          }}
        ></div>
      </div>
      {props.weapon.weapon_properties.length > 0 && (
        <div className={styles.card_row}>
          <span className={styles.card_category}>Properties</span>
          {props.weapon.weapon_properties.map((object, i) => {
            return (
              <span key={i} className={styles.card_property}>
                {object}&nbsp;
              </span>
            );
          })}
        </div>
      )}
    </Card>
  );
}

export function Potion(props) {
  return (
    <Card rarity={props.potion.rarity}>
      <div className={styles.card_row_header}>
        <span className={styles.card_header}>{props.potion.name}</span>
        <span className={styles.card_type}>{props.potion.type + ", " + props.potion.rarity}</span>
      </div>
      <div
        className={styles.card_image}
        style={{ backgroundImage: "url(" + props.potion.image + ")" }}
      >
        <div></div>
      </div>
      <div className={styles.card_row}>
        <span className={styles.card_description}>
          {props.potion.description}
        </span>
      </div>
    </Card>
  );
}

export function Armor(props) {
  return (
    <Card rarity={props.armor.rarity}>
      <div className={styles.card_row_header}>
        <span className={styles.card_header}>{props.armor.name}</span>
        <span className={styles.card_type}>{props.armor.type}</span>
      </div>
      {props.armor.attunement && (
        <div className={styles.card_row_header}>
          <span className={styles.card_attunement}>Requires Attunement</span>
        </div>
      )}
      <div className={styles.card_table}>
        <div>
          <span className={styles.card_category}>Armor Class</span>
          <span className={styles.card_property}>{props.armor.armorclass}</span>
        </div>
      </div>
      <div
        className={styles.card_image}
        style={{ backgroundImage: "url(" + props.armor.image + ")" }}
      >
        <div></div>
      </div>
      {props.armor.properties.length > 0 && (
        <div className={styles.card_row}>
          {props.armor.properties.map((object, i) => {
            return (
              <span key={i} className={styles.card_property}>
                {object}&nbsp;
              </span>
            );
          })}
        </div>
      )}
    </Card>
  );
}

export function Item(props) {
  function slots(numb) {
    return new Array(numb).fill(<div className={styles.card_slot}></div>);
  }
  return (
    <Card rarity={props.item.rarity}>
      <div className={styles.card_row_header}>
        <span className={styles.card_header}>{props.item.name}</span>
        <span className={styles.card_type}>{props.item.type + ", " + props.item.rarity}</span>
      </div>
      {props.item.attunement && (
        <div className={styles.card_row_header}>
          <span className={styles.card_attunement}>Requires Attunement</span>
        </div>
      )}
      {props.item.image.length > 0 && (
        <div
          className={styles.card_image}
          style={{ backgroundImage: "url(" + props.item.image + ")" }}
        >
          <div></div>
        </div>
      )}
      {props.item.description.length > 0 && (
        <div className={styles.card_row}>
          <span className={styles.card_description}>
            {props.item.description}
          </span>
        </div>
      )}
      {props.item.slots > 0 && (
        <div className={styles.card_row_slots}>{slots(props.item.slots)}</div>
      )}
    </Card>
  );
}

export function Basic(props) {
  return (
    <Card rarity={props.item.rarity}>
      <div className={styles.card_row_header}>
        <span className={styles.card_header}>{props.item.name}</span>
      </div>
      <div className={styles.card_row}>
        <span className={styles.card_description}>{props.item.content}</span>
      </div>
    </Card>
  );
}

export function Empty(props) {
  // For some resason everything is fucked if the card has no content.
  // A non breaking space ( ) is content
  return (
    <Card rarity={props.rarity}>
      <div className={styles.card_row}>
        <span className={styles.card_header}>{" "}</span>
      </div>
    </Card>
  );
}
