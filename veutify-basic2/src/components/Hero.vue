<template>
  <v-card>
        <v-carousel>
    <v-carousel-item
      v-for="(item,i) in cards"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"

    ></v-carousel-item>
  </v-carousel>





    <v-container fluid >
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card class="mt-10" >
            <v-img
              :src="card.src"
              class="white--text align-end space-around"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px" 
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>              
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>






   <v-card class="d-flex justify-center ml-10" >
    <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >Dialog box</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the top</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello worldnnn!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      </v-card>
      <v-card
      class="d-flex justify-start mt-7"
      flat
      tile>
      <v-card>
        justify-start
      </v-card>
      <v-card>
        justify-start
      </v-card>
    </v-card>
  </v-card>
  </v-card>
</template>

<script>
export default {
    data: () => ({
      cards: [
        { title: 'Money Heist', src: 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/05/25/938590-money-heist.png', flex: 4 },
        { title: 'Baby', src: 'https://imageproxy.viewbook.com/58395/8dff85cd61bae54acc1355c6776f42bc_hd.jpg?w=1458&h=2158&fmt=webp', flex: 4 },
         { title: 'Baby', src: 'https://imageproxy.viewbook.com/58395/8dff85cd61bae54acc1355c6776f42bc_hd.jpg?w=1458&h=2158&fmt=webp', flex: 4 },
      ],
      items: [
          {
            src: 'https://imageproxy.viewbook.com/58395/8dff85cd61bae54acc1355c6776f42bc_hd.jpg?w=1458&h=2158&fmt=webp',
          },
          {
            src: 'https://piktochart.com/wp-content/uploads/2019/12/pop-culture-poster-674x1000-3495171.png',
          },
          {
            src: 'https://piktochart.com/wp-content/uploads/2019/12/pop-culture-poster-674x1000-3495171.png',
          }
        ],
         drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
    }),
  }
</script>

<style>

</style>