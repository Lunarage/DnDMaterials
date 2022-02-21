import React from 'react';
import styles from '../styles/Home.module.css';
import {
  Page,
  Weapon,
  Armor,
  Item,
  Basic,
  Empty,
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
        <Weapon weapon={weapon.rapier} />
        <Armor armor={armor.leather} />
        <Weapon weapon={weapon.longbow} />
        <Item item={gear.ropeHempen} />
        <Item item={gear.crowbar} />
        <Item item={gear.hammer} />
        <Item item={gear.tinderbox} />
        <Item item={gear.waterskin} />
      </Page>
      <Page>
        <Armor armor={armor.chainMailMithril} />
        <Weapon weapon={weapon.battleaxe1} />
        <Weapon weapon={weapon.longbow1} />
        <Weapon weapon={weapon.mace1} />
        <Weapon weapon={weapon.shortsword1} />
        <Weapon weapon={weapon.longsword1} />
        <Weapon weapon={weapon.rapier1} />
        <Weapon weapon={weapon.quarterstaff1} />
      </Page>
      <Page>
        <Item item={magicitem.muteCrowbar} />
        <Item item={magicitem.releasingHook} />
        <Item item={magicitem.unendingCoil} />
        <Item item={magicitem.flutterscope} />
        <Item item={magicitem.ringOfBeards} />
        <Item item={magicitem.preservativeJar} />
        <Item item={magicitem.mugOfInfiniteCoffee} />
        <Item item={magicitem.ringOfFeignDeath} />
      </Page>
      <Page>
        <Item item={gear.healersKit} />
        <Item item={gear.healersKit} />
        <Item item={gear.healersKit} />
        <Item item={gear.healersKit} />
        <Item item={gear.healersKit} />
        <Item item={gear.healersKit} />
        <Item item={gear.healersKit} />
        <Item item={gear.healersKit} />
      </Page>
      <Page>
        <Item item={potion.waterBreathing} />
        <Item item={potion.invurnerability} />
      </Page>
    </main>
  );
}
