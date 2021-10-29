<template>
  <q-page>
    <div class="q-pa-md q-gutter-md row">
      <q-select
        v-model="selObj"
        use-input
        emit-value
        map-options
        input-debounce="0"
        option-label="name"
        option-value="id"
        :options="options"
        @filter="filterFn"
        @popup-hide = "hideMenu"
        hint="Search for Member"
        style="width: 350px; padding-bottom: 32px"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
    
    <div class="q-pa-md" style="max-width: 380px">
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-toolbar-title>Members</q-toolbar-title>
      </q-toolbar>
      
      <q-scroll-area
        style="height: 330px;"
      >
        <q-list bordered highlight separator>
          <q-item v-for="contact in members" :key="contact.id" class="q-my-sm" active-class="active-item" :class="(contact.name===keyword.name && contact.id===keyword.id)?'bg-red':'bg-white'" @click="clickContact(contact)" clickable v-ripple >
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white">
                {{ contact.letter }}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ contact.name }}</q-item-label>
              <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-icon name="chat_bubble" color="green"></q-icon>
            </q-item-section>
          </q-item>

          <q-separator></q-separator>

        </q-list>  
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script src="../script/index.js"></script>
