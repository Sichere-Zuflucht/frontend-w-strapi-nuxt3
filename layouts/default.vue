<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app class="bg-secondary" fixed disable-resize-watcher>
      <client-only>
        <v-list v-model:opened="open"> 
          <div v-for="(li, n) in general" :key="n">
            <v-list-group v-if="li.subgroup" :value="li.title" class="text-white">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" :prepend-icon="li.icon" :title="li.title" ></v-list-item>
              </template>
              <v-list-item v-for="(sub, i) in li.subgroup" :key="i" :title="sub.title" :to="sub.to"></v-list-item>
            </v-list-group>
            <v-list-item v-else :title="li.title" :prepend-icon="li.icon" :to="li.to" class="text-white"></v-list-item>
          </div>
        </v-list>
      </client-only>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-row no-gutters align-content="center">
        <v-col cols="1" sm="4" align-self="center"><v-app-bar-nav-icon @click.stop="drawer = !drawer" /></v-col>
        <v-col cols="10" sm="4" align-self="center"><v-toolbar-title class="pa-0 d-flex justify-center"><v-btn to="/"
              nuxt exact text plain :ripple="false"><v-img contain width="200"
                src="/Sichere-Zuflucht-Logo.svg" /></v-btn></v-toolbar-title></v-col>
        <v-col cols="1" sm="4" align-self="center" class="d-flex justify-end">
          <div v-if="!user && smAndUp/*$vuetify.breakpoint.smAndUp*/" class="d-flex justify-end"
            style="max-width: 300px">
            <v-btn v-if="mdAndUp" to="/registration/signin" exact nuxt text class="mr-1">Einloggen</v-btn>
            <v-btn to="/registration/signup" color="accent" exact nuxt>Registrieren</v-btn>
          </div>
          <client-only>
            <v-btn v-if="user && user.confirmed" nuxt exact icon plain :to="user.role === 'Coach' ? '/beratung' : null"
              @click="user.role === 'Coach' ? null : logout()">
              <v-avatar v-if="user.role === 'Coach'" size="38" color="grey lighten-2"><v-img v-if="user.public.avatar"
                  :src="user.public.avatar" />
                <v-icon v-else>mdi-account</v-icon> </v-avatar><v-icon v-else>mdi-logout</v-icon></v-btn>
          </client-only>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-card dark color="red" width="70" style="position: fixed; bottom: 50px; right: 0; z-index: 100"
      href="https://www.brigitte.de/" tile>
      <v-card-text class="pa-1 d-flex flex-column align-center">
        <v-icon small>mdi-eye-off</v-icon>
        <p style="font-size: 10px; line-height: 10px" class="text-center mb-0">
          Seite verstecken
        </p>
      </v-card-text>
    </v-card>
    <v-main style="hyphens: auto" class="pb-0">
      <slot />
    </v-main>
    <!--<UtilsFooter></UtilsFooter>-->
  </v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify';
const { mdAndUp, smAndUp } = useDisplay();

const drawer = ref(true)
const open = ref(['Für Frauen', 'Helfen Sie'])
const general = [
{
          icon: 'mdi-home',
          title: 'Startseite',
          to: '/',
        },{
          icon: 'mdi-newspaper-variant',
          title: 'Magazin',
          to: '/magazine',
        },
        {
          icon: 'mdi-face-woman',
          title: 'Für Frauen',
          subgroup: [
            {
              icon: 'mdi-information-variant',
              title: 'Informationen',
              to: '/info/frauen',
            },
            {
              icon: 'mdi-account-search',
              title: 'Beratung finden',
              to: '/berater',
            },
          ],
        },
        {
          icon: 'mdi-hand-heart',
          title: 'Helfen Sie',
          subgroup: [
            {
              icon: 'mdi-hand-heart',
              title: 'Als Berater*innen',
              to: '/info/berater',
            },
            {
              icon: 'mdi-hand-heart',
              title: 'Mit einer Unterkunft',
              to: '/info/unterkunft',
            },
          ],
        },
        {
          icon: 'mdi-gift',
          title: 'Spenden',
          to: '/footer/spenden',
        },
        {
          icon: 'mdi-account-group',
          title: 'Über uns',
          to: '/footer/ueber-uns',
        },
]
const cruds = [
  ['Create', 'mdi-plus-outline'],
  ['Read', 'mdi-file-outline'],
  ['Update', 'mdi-update'],
  ['Delete', 'mdi-delete'],
]

watch(mdAndUp, smAndUp, { immediate: true });
</script>

<style scoped>
section {
  display: flex;
}

section .main {
  overflow: hidden;
  flex-grow: 4;
}
</style>
