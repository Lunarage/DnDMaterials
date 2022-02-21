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
        <Item item={magicitem.cloakOfElvenkindFront} />
        <Item item={magicitem.lanternOfRevealingFront} />
        <Item item={magicitem.immovableRodFront} />
        <Item item={magicitem.necklaceOfFireballsFront} />
        <Weapon weapon={weapon.dragonSlayerFront} />
        <Weapon weapon={weapon.hewFront} />
        <Empty />
        <Empty />
      </Page>
      <Page>
        <Basic item={magicitem.necklaceOfFireballsBack} />
        <Basic item={magicitem.immovableRodBack} />
        <Basic item={magicitem.lanternOfRevealingBack} />
        <Basic item={magicitem.cloakOfElvenkindBack} />
        <Empty />
        <Empty />
        <Basic item={weapon.hewBack} />
        <Basic item={weapon.dragonSlayerBack} />
      </Page>
      <Page>
        <Item item={magicitem.poleOfCollapsing} />
        <Item item={magicitem.luteOfIllusions} />
        <Item item={magicitem.clockworkAmulet} />
        <Item item={magicitem.cloakOfManyFashions} />
        <Item item={magicitem.cloakOfBillowing} />
        <Item item={magicitem.dustOfDisappearance} />
        <Item item={magicitem.gogglesOfNight} />
        <Item item={magicitem.mysteryKey} />
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
        <Item item={magicitem.ringOfWarmth} />
        <Item item={magicitem.ringOfWarmth} />
        <Item item={magicitem.ringOfWarmth} />
        <Item item={magicitem.ringOfWarmth} />
        <Item item={magicitem.ringOfWarmth} />
        <Item item={magicitem.bootsOfElvenkind} />
        <Item item={magicitem.bracersOfArchery} />
        <Item item={magicitem.gauntletsOfOgrePower} />
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
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing} />
      </Page>
      <Page>
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healingGreater} />
        <Item item={potion.healingGreater} />
        <Item item={potion.healingSuperior} />
        <Item item={potion.healingSuperior} />
        <Item item={potion.healingSupreme} />
        <Item item={potion.healingSupreme} />
      </Page>
      <Page>
        <Item item={potion.waterBreathing} />
        <Item item={potion.invurnerability} />
      </Page>
      <Page>
        <Armor armor={armor.padded} />
        <Armor armor={armor.padded} />
        <Armor armor={armor.padded} />
        <Armor armor={armor.padded} />
        <Armor armor={armor.leather} />
        <Armor armor={armor.leather} />
        <Armor armor={armor.leather} />
        <Armor armor={armor.leather} />
      </Page>
      <Page>
        <Armor armor={armor.studdedLeather} />
        <Armor armor={armor.studdedLeather} />
        <Armor armor={armor.studdedLeather} />
        <Armor armor={armor.studdedLeather} />
        <Armor armor={armor.hide} />
        <Armor armor={armor.hide} />
        <Armor armor={armor.hide} />
        <Armor armor={armor.hide} />
      </Page>
      <Page>
        <Armor armor={armor.chainShirt} />
        <Armor armor={armor.chainShirt} />
        <Armor armor={armor.chainShirt} />
        <Armor armor={armor.chainShirt} />
        <Armor armor={armor.scaleMail} />
        <Armor armor={armor.scaleMail} />
        <Armor armor={armor.scaleMail} />
        <Armor armor={armor.scaleMail} />
      </Page>
      <Page>
        <Armor armor={armor.breastplate} />
        <Armor armor={armor.breastplate} />
        <Armor armor={armor.breastplate} />
        <Armor armor={armor.breastplate} />
        <Armor armor={armor.halfPlate} />
        <Armor armor={armor.halfPlate} />
        <Armor armor={armor.halfPlate} />
        <Armor armor={armor.halfPlate} />
      </Page>
      <Page>
        <Armor armor={armor.ringMail} />
        <Armor armor={armor.ringMail} />
        <Armor armor={armor.ringMail} />
        <Armor armor={armor.ringMail} />
        <Armor armor={armor.chainMail} />
        <Armor armor={armor.chainMail} />
        <Armor armor={armor.chainMail} />
        <Armor armor={armor.chainMail} />
      </Page>
      <Page>
        <Armor armor={armor.splint} />
        <Armor armor={armor.splint} />
        <Armor armor={armor.splint} />
        <Armor armor={armor.splint} />
        <Armor armor={armor.plate} />
        <Armor armor={armor.plate} />
        <Armor armor={armor.plate} />
        <Armor armor={armor.plate} />
      </Page>
      <Page>
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
      </Page>
      <Page>
        <Armor armor={armor.chainMailMithril} />
        <Weapon weapon={weapon.longbow1} />
        <Weapon weapon={weapon.mace1} />
        <Weapon weapon={weapon.shortsword1} />
      </Page>
      <Page>
        <Weapon weapon={weapon.battleaxe} />
        <Weapon weapon={weapon.battleaxe} />
        <Weapon weapon={weapon.battleaxe} />
        <Weapon weapon={weapon.battleaxe} />
        <Weapon weapon={weapon.club} />
        <Weapon weapon={weapon.club} />
        <Weapon weapon={weapon.club} />
        <Weapon weapon={weapon.club} />
      </Page>
      <Page>
        <Weapon weapon={weapon.crossbowHeavy} />
        <Weapon weapon={weapon.crossbowHeavy} />
        <Weapon weapon={weapon.crossbowHeavy} />
        <Weapon weapon={weapon.crossbowHeavy} />
        <Weapon weapon={weapon.crossbowLight} />
        <Weapon weapon={weapon.crossbowLight} />
        <Weapon weapon={weapon.crossbowLight} />
        <Weapon weapon={weapon.crossbowLight} />
      </Page>
      <Page>
        <Weapon weapon={weapon.dagger} />
        <Weapon weapon={weapon.dagger} />
        <Weapon weapon={weapon.dagger} />
        <Weapon weapon={weapon.dagger} />
        <Weapon weapon={weapon.flail} />
        <Weapon weapon={weapon.flail} />
        <Weapon weapon={weapon.flail} />
        <Weapon weapon={weapon.flail} />
      </Page>
      <Page>
        <Weapon weapon={weapon.glavie} />
        <Weapon weapon={weapon.glavie} />
        <Weapon weapon={weapon.glavie} />
        <Weapon weapon={weapon.glavie} />
        <Weapon weapon={weapon.greataxe} />
        <Weapon weapon={weapon.greataxe} />
        <Weapon weapon={weapon.greataxe} />
        <Weapon weapon={weapon.greataxe} />
      </Page>
      <Page>
        <Weapon weapon={weapon.greatclub} />
        <Weapon weapon={weapon.greatclub} />
        <Weapon weapon={weapon.greatclub} />
        <Weapon weapon={weapon.greatclub} />
        <Weapon weapon={weapon.greatsword} />
        <Weapon weapon={weapon.greatsword} />
        <Weapon weapon={weapon.greatsword} />
        <Weapon weapon={weapon.greatsword} />
      </Page>
      <Page>
        <Weapon weapon={weapon.halberd} />
        <Weapon weapon={weapon.halberd} />
        <Weapon weapon={weapon.halberd} />
        <Weapon weapon={weapon.halberd} />
        <Weapon weapon={weapon.handaxe} />
        <Weapon weapon={weapon.handaxe} />
        <Weapon weapon={weapon.handaxe} />
        <Weapon weapon={weapon.handaxe} />
      </Page>
      <Page>
        <Weapon weapon={weapon.handcrossbow} />
        <Weapon weapon={weapon.handcrossbow} />
        <Weapon weapon={weapon.handcrossbow} />
        <Weapon weapon={weapon.handcrossbow} />
        <Weapon weapon={weapon.javelin} />
        <Weapon weapon={weapon.javelin} />
        <Weapon weapon={weapon.javelin} />
        <Weapon weapon={weapon.javelin} />
      </Page>
      <Page>
        <Weapon weapon={weapon.lighthammer} />
        <Weapon weapon={weapon.lighthammer} />
        <Weapon weapon={weapon.lighthammer} />
        <Weapon weapon={weapon.lighthammer} />
        <Weapon weapon={weapon.longbow} />
        <Weapon weapon={weapon.longbow} />
        <Weapon weapon={weapon.longbow} />
        <Weapon weapon={weapon.longbow} />
      </Page>
      <Page>
        <Weapon weapon={weapon.longsword} />
        <Weapon weapon={weapon.longsword} />
        <Weapon weapon={weapon.longsword} />
        <Weapon weapon={weapon.longsword} />
        <Weapon weapon={weapon.mace} />
        <Weapon weapon={weapon.mace} />
        <Weapon weapon={weapon.mace} />
        <Weapon weapon={weapon.mace} />
      </Page>
      <Page>
        <Weapon weapon={weapon.maul} />
        <Weapon weapon={weapon.maul} />
        <Weapon weapon={weapon.maul} />
        <Weapon weapon={weapon.maul} />
        <Weapon weapon={weapon.morningstar} />
        <Weapon weapon={weapon.morningstar} />
        <Weapon weapon={weapon.morningstar} />
        <Weapon weapon={weapon.morningstar} />
      </Page>
      <Page>
        <Weapon weapon={weapon.pike} />
        <Weapon weapon={weapon.pike} />
        <Weapon weapon={weapon.pike} />
        <Weapon weapon={weapon.pike} />
        <Weapon weapon={weapon.quarterstaff} />
        <Weapon weapon={weapon.quarterstaff} />
        <Weapon weapon={weapon.quarterstaff} />
        <Weapon weapon={weapon.quarterstaff} />
      </Page>
      <Page>
        <Weapon weapon={weapon.rapier} />
        <Weapon weapon={weapon.rapier} />
        <Weapon weapon={weapon.rapier} />
        <Weapon weapon={weapon.rapier} />
        <Weapon weapon={weapon.scimitar} />
        <Weapon weapon={weapon.scimitar} />
        <Weapon weapon={weapon.scimitar} />
        <Weapon weapon={weapon.scimitar} />
      </Page>
      <Page>
        <Weapon weapon={weapon.shortbow} />
        <Weapon weapon={weapon.shortbow} />
        <Weapon weapon={weapon.shortbow} />
        <Weapon weapon={weapon.shortbow} />
        <Weapon weapon={weapon.shortsword} />
        <Weapon weapon={weapon.shortsword} />
        <Weapon weapon={weapon.shortsword} />
        <Weapon weapon={weapon.shortsword} />
      </Page>
      <Page>
        <Weapon weapon={weapon.sickle} />
        <Weapon weapon={weapon.sickle} />
        <Weapon weapon={weapon.sickle} />
        <Weapon weapon={weapon.sickle} />
        <Weapon weapon={weapon.sling} />
        <Weapon weapon={weapon.sling} />
        <Weapon weapon={weapon.sling} />
        <Weapon weapon={weapon.sling} />
      </Page>
      <Page>
        <Weapon weapon={weapon.spear} />
        <Weapon weapon={weapon.spear} />
        <Weapon weapon={weapon.spear} />
        <Weapon weapon={weapon.spear} />
        <Weapon weapon={weapon.trident} />
        <Weapon weapon={weapon.trident} />
        <Weapon weapon={weapon.trident} />
        <Weapon weapon={weapon.trident} />
      </Page>
      <Page>
        <Weapon weapon={weapon.warhammer} />
        <Weapon weapon={weapon.warhammer} />
        <Weapon weapon={weapon.warhammer} />
        <Weapon weapon={weapon.warhammer} />
        <Weapon weapon={weapon.warpick} />
        <Weapon weapon={weapon.warpick} />
        <Weapon weapon={weapon.warpick} />
        <Weapon weapon={weapon.warpick} />
      </Page>
      <Page>
        <Weapon weapon={weapon.whip} />
        <Weapon weapon={weapon.whip} />
        <Weapon weapon={weapon.whip} />
        <Weapon weapon={weapon.whip} />
        <Weapon weapon={weapon.rapier} />
        <Weapon weapon={weapon.rapier} />
        <Weapon weapon={weapon.shortsword} />
        <Weapon weapon={weapon.shortsword} />
      </Page>
    </main>
  );
}
