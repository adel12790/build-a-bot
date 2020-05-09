<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to cart</button>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">{{selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!!</span></div>
        <img :src="selectedRobot.head.src" title="head"/>
        <button @click="selectPreviousPart('heads')" class="prev-selector">&#9668;</button>
        <button @click="selectNextPart('heads')" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.arms.src" title="left arm"/>
        <button @click="selectPreviousPart('arms')" class="prev-selector">&#9650;</button>
        <button @click="selectNextPart('arms')" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="left arm"/>
        <button @click="selectPreviousPart('torsos')" class="prev-selector">&#9668;</button>
        <button @click="selectNextPart('torsos')" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.arms.src" title="left arm"/>
        <button @click="selectPreviousPart('arms')" class="prev-selector">&#9650;</button>
        <button @click="selectNextPart('arms')" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="left arm"/>
        <button @click="selectPreviousPart('bases')" class="prev-selector">&#9668;</button>
        <button @click="selectNextPart('bases')" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
        <tr>
          <th>Robot</th>
          <th class="cost"> Cost</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{robot.head.title}}</td>
            <td class="cost">{{robot.cost}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';

function getPreviousValidIndex(index, length) {
  const depricatedIndex = index - 1;
  return depricatedIndex < 0 ? length - 1 : depricatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}
export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      cart: [],
      selectedPartIndex: {
        heads: 0,
        arms: 0,
        torsos: 0,
        bases: 0,
      },
    };
  },
  computed: {
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedPartIndex.heads],
        arms: availableParts.arms[this.selectedPartIndex.arms],
        torso: availableParts.torsos[this.selectedPartIndex.torsos],
        base: availableParts.bases[this.selectedPartIndex.bases],
      };
    },
  },
  methods: {
    selectNextPart(part) {
      this.selectedPartIndex[part] = getNextValidIndex(
        this.selectedPartIndex[part], availableParts[part].length,
      );
    },
    selectPreviousPart(part) {
      this.selectedPartIndex[part] = getPreviousValidIndex(
        this.selectedPartIndex[part], availableParts[part].length,
      );
    },
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.heads.cost + robot.arms.cost + robot.torsos.cost + robot.bases.cost;
      this.cart.push({ ...robot, cost });
    },
  },
};
</script>

<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name{
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale{
  color: red;
}
.content{
  position: relative;
}
.add-to-cart{
  position:absolute;
  right:30px;
  width: 120px;
  padding: 3px;
  font-size: 16px;
}
th,td{
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost{
  text-align: right;
}
</style>
