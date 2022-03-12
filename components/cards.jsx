/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../styles/Home.module.css';

export function Page({ children }) {
  return <div className={styles.page}>{children}</div>;
}

function Card({ rarity, children }) {
  let classes = styles.card;
  if (rarity === 'uncommon') {
    classes = `${classes} ${styles.uncommon}`;
  } else if (rarity === 'rare') {
    classes = `${classes} ${styles.rare}`;
  } else if (rarity === 'very rare') {
    classes = `${classes} ${styles.veryrare}`;
  } else if (rarity === 'legendary') {
    classes = `${classes} ${styles.legendary}`;
  } else {
    classes = `${classes} ${styles.common}`;
  }
  return <div className={classes}>{children}</div>;
}

export function EmptyPage() {
  return (
    <div className={styles.page}>
      <Empty />
      <Empty />
      <Empty />
      <Empty />
      <Empty />
      <Empty />
      <Empty />
      <Empty />
    </div>
  );
}

export function Spell() {

}

export function Trait({ rarity }) {
  return (
    <Card rarity={rarity} />
  );
}

export function Weapon({ weapon }) {
  function slots(numb) {
    return new Array(numb).fill(<div className={styles.card_slot} />);
  }
  return (
    <Card rarity={weapon.rarity}>
      <div className={styles.card_row_header}>
        <span className={styles.card_header}>{weapon.name}</span>
        <span className={styles.card_type}>{weapon.weapon_type}</span>
      </div>
      {weapon.attunement && (
        <div className={styles.card_row_header}>
          <span className={styles.card_attunement}>Requires Attunement</span>
        </div>
      )}
      <div className={styles.card_table}>
        <div>
          <span className={styles.card_category}>Damage</span>
          <span className={styles.card_property}>{weapon.damage}</span>
        </div>
        <div>
          <span className={styles.card_category}>Damage Type</span>
          <span className={styles.card_property}>
            {weapon.damage_type}
          </span>
        </div>
      </div>
      <div
        className={styles.card_image}
        style={{ backgroundImage: `url(${weapon.image})` }}
      >
        <div
          style={{
            backgroundImage:
              `url(${
                weapon.dice
              }),url(${
                weapon.damage_type_image
              })`,
          }}
        />
      </div>
      {weapon.weapon_properties.length > 0 && (
        <div className={styles.card_row}>
          <span className={styles.card_category}>Properties</span>
          {weapon.weapon_properties.map((object, i) => (
            <span key={i} className={styles.card_property}>
              {object}
&nbsp;
            </span>
          ))}
        </div>
      )}
      {weapon.slots > 0 && (
        <div className={styles.card_row_slots}>{slots(weapon.slots)}</div>
      )}
    </Card>
  );
}

export function Potion({ potion }) {
  return (
    <Card rarity={potion.rarity}>
      <div className={styles.card_row_header}>
        <span className={styles.card_header}>{potion.name}</span>
        <span className={styles.card_type}>{`${potion.type}, ${potion.rarity}`}</span>
      </div>
      <div
        className={styles.card_image}
        style={{ backgroundImage: `url(${potion.image})` }}
      >
        <div />
      </div>
      <div className={styles.card_row}>
        <span className={styles.card_description}>
          {potion.description}
        </span>
      </div>
    </Card>
  );
}

export function Armor({ armor }) {
  return (
    <Card rarity={armor.rarity}>
      <div className={styles.card_row_header}>
        <span className={styles.card_header}>{armor.name}</span>
        <span className={styles.card_type}>{armor.type}</span>
      </div>
      {armor.attunement && (
        <div className={styles.card_row_header}>
          <span className={styles.card_attunement}>Requires Attunement</span>
        </div>
      )}
      <div className={styles.card_table}>
        <div>
          <span className={styles.card_category}>Armor Class</span>
          <span className={styles.card_property}>{armor.armorclass}</span>
        </div>
      </div>
      <div
        className={styles.card_image}
        style={{ backgroundImage: `url(${armor.image})` }}
      >
        <div />
      </div>
      {armor.properties.length > 0 && (
        <div className={styles.card_row}>
          {armor.properties.map((object, i) => (
            <span key={i} className={styles.card_property}>
              {object}
&nbsp;
            </span>
          ))}
        </div>
      )}
    </Card>
  );
}

export function Item({ item }) {
  function slots(numb) {
    return new Array(numb).fill(<div className={styles.card_slot} />);
  }
  return (
    <Card rarity={item.rarity}>
      <div className={styles.card_row_header}>
        <span className={styles.card_header}>{item.name}</span>
        <span className={styles.card_type}>{`${item.type}, ${item.rarity}`}</span>
      </div>
      {item.attunement && (
        <div className={styles.card_row_header}>
          <span className={styles.card_attunement}>Requires Attunement</span>
        </div>
      )}
      {item.image.length > 0 && (
        <div
          className={styles.card_image}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div />
        </div>
      )}
      {item.description.length > 0 && (
        <div className={styles.card_row}>
          <span className={styles.card_description}>
            {item.description}
          </span>
        </div>
      )}
      {item.slots > 0 && (
        <div className={styles.card_row_slots}>{slots(item.slots)}</div>
      )}
    </Card>
  );
}

export function Basic({ item }) {
  return (
    <Card rarity={item.rarity}>
      <div className={styles.card_row_header}>
        <span className={styles.card_header}>{item.name}</span>
      </div>
      <div className={styles.card_row}>
        <span className={styles.card_description}>{item.content}</span>
      </div>
    </Card>
  );
}

export function Empty({ rarity }) {
  // For some resason everything is fucked if the card has no content.
  // A non breaking space ( ) is content
  return (
    <Card rarity={rarity}>
      <div className={styles.card_row}>
        <span className={styles.card_header}>{' '}</span>
      </div>
    </Card>
  );
}
