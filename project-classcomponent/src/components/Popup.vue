<template>
<div>
  <div class="popup">
      <div class="popup-inner">
          <slot/>
          <button class="btn btn-danger popup-close "  >Close Button</button>
      </div>
  </div>
  {{msg}}
</div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
const GreetingProps = Vue.extend({
  props: {
   array : Array
  }
})
@Component
export default class Popup extends GreetingProps{
    @Prop() msg!:string

    closePopup(){
        this.togglePopup()
    }
}
</script>

<style scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);
	
	display: flex;
	align-items: center;
	justify-content: center;

}
.popup .popup-inner {
		background: #FFF;
		padding: 32px;
	}
</style>}