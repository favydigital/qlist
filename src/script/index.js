import { defineComponent, ref } from 'vue';
import { Notify } from 'quasar'

const members = [ {
  id: 1,
  name: 'Ruddy Jedrzej',
  email: 'rjedrzej0@discuz.net',
  letter: 'R'
}, {
  id: 2,
  name: 'Mallorie Alessandrini',
  email: 'malessandrini1@marketwatch.com',
  letter: 'M'
}, {
  id: 3,
  name: 'Elisabetta Wicklen',
  email: 'ewicklen2@microsoft.com',
  letter: 'E'
}, {
  id: 4,
  name: 'Seka Fawdrey',
  email: 'sfawdrey3@wired.com',
  letter: 'S'
}, {
  id: 5,
  name: 'Brunhilde Panswick',
  email: 'bpanswick4@csmonitor.com',
  avatar: 'avatar2.jpg',
  letter: 'BP'
}, {
  id: 6,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg',
    letter: 'S'
},
                {
  id: 7,
  name: 'Ruddy Jedrzej',
  email: 'rjedrzej0@discuz.net',
  letter: 'R'
}, {
  id: 8,
  name: 'Mallorie Alessandrini',
  email: 'malessandrini1@marketwatch.com',
  letter: 'M'
}, {
  id: 9,
  name: 'Elisabetta Wicklen',
  email: 'ewicklen2@microsoft.com',
  letter: 'E'
}, {
  id: 10,
  name: 'Seka Fawdrey',
  email: 'sfawdrey3@wired.com',
  letter: 'S'
}, {
  id: 11,
  name: 'Brunhilde Panswick',
  email: 'bpanswick4@csmonitor.com',
  avatar: 'avatar2.jpg'
}, {
  id: 12,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
}]

export default defineComponent({
  name: 'PageIndex',
  data(){
    return{
      members : members,
      options : [],
      keyword : {
        id : 0,
        name : '',
      },
      model : ref(null),
      selObj : ref(null),
    }
  },
  created() {
    for (var i = 0; i < this.members.length; i++){
      this.options.push({
        id : this.members[i].id,
        name : this.members[i].name,
      });
    }
  },
  methods: {
    filterFn(val, update, abort){
      if (val.length < 1) {
        abort()
        return
      }
  
      update(() => {
        const itemValue = val.toLowerCase();
        this.options = [];
        
        this.members.forEach(item => {
          if (item.name.toLowerCase().includes(itemValue)){
            this.options.push({
              id : item.id,
              name : item.name,
            });
          }
        })
      })
    },
    hideMenu(evt){
      var nIndex = this.selObj;

      for (var i =0; i < this.options.length; i++){
        if (this.options[i].id == nIndex){
          this.keyword = this.options[i];
          break;
        }
      }
    },
    clickContact(item){
       Notify.create({
           message: 'you click ' + item.name + ", email is " + item.email,
           color: 'green'
       })
    }
  }
})