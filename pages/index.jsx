import React from 'react';
import styles from '../styles/Home.module.css';
import {
  Page,
  Weapon,
  Armor,
  Item,
  Empty,
  Basic,
} from '../components/cards';
import * as weapon from '../definitions/weapons';
import * as potion from '../definitions/potions';
import * as armor from '../definitions/armor';
import * as magicitem from '../definitions/magic_items';
import * as gear from '../definitions/gear';

export default function Home() {
  return (
    <main className={styles.main}>
      <Page>
        <Weapon weapon={weapon.javelinOfLightningFront} />
        <Item item={magicitem.ringOfTheRamFront} />
        <Armor armor={armor.dragonguardFront} />
        <Weapon weapon={weapon.forceCrossbowFront} />
        <Weapon weapon={weapon.shortbow1} />
        <Weapon weapon={weapon.greataxe1} />
        <Weapon weapon={weapon.greatsword1} />
        <Weapon weapon={weapon.trident1} />
      </Page>
      <Page>
        <Basic item={weapon.forceCrossbowBack} />
        <Basic item={armor.dragonguardBack} />
        <Basic item={magicitem.ringOfTheRamBack} />
        <Basic item={weapon.javelinOfLightningBack} />
      </Page>
      <Page>
        <Item item={magicitem.molton} />
      </Page>
    </main>
  );
}
