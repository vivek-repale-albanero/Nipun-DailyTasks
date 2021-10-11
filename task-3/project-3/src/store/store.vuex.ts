import Vue from 'vue';
import Vuex from 'vuex';
import { createProxy, extractVuexModule } from "vuex-class-component";
import LetterStore from './LetterStore.vuex';
import CvStore from './CvStore.vuex';
import InvoiceStore from './InvoiceStore.vuex';
export  const store = new Vuex.Store({
  modules: {
    ...extractVuexModule( LetterStore ),
    ...extractVuexModule(CvStore),
    ...extractVuexModule(InvoiceStore)
  }
})
export const vxm = {
  user: createProxy( store, LetterStore ),
  cvstore:createProxy(store,CvStore),
  invoicestore:createProxy(store,InvoiceStore)
} 

