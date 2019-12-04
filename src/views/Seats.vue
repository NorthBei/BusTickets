<template>
  <div>
    <!-- <md-checkbox v-model="x[0]" class="checkbox" data-num="1"></md-checkbox> -->
    <!-- <md-checkbox v-model="x[1]" class="checkbox" data-num="2"></md-checkbox> -->
    <h3 style="text-align: center;">選擇 1 個座位</h3>
    <div id="car-wrapper">
      <div id="car">
        <span class="row" style="justify-content: space-between; padding:0 10px;">
          <span>駕駛座</span>
          <span>前門</span>
        </span>
        <span v-for="(items, index) in list" :key="index" class="row">
          <div v-for="(item, i) in items" :key="i">
            <md-checkbox
              v-model="item.model" class="checkbox"
              :data-num="item.num"
              :indeterminate="item.isIndeterminate"
              :disabled="item.isSold">
            </md-checkbox>
          <!-- <br v-if="index+1 !== 1 && (index+1)%5 === 0"> -->
          </div>
        </span>
      </div>
    </div>
    <div id="symbols">
      <md-checkbox :v-model="true" disabled class="checkbox">已售出</md-checkbox>
      <md-checkbox :v-model="true" class="checkbox">可選擇</md-checkbox>
    </div>
    <md-button class="md-raised md-primary" id="check-btn" @click="next">確定</md-button>
  </div>
</template>
<script>
export default {
  name: 'home',
  data: () => ({
    y: [
      {
        num: '4',
        isSold: true,
        isIndeterminate: false,
        model: false
      },
      {
        num: '2',
        isSold: true,
        isIndeterminate: false,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '1',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '8',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '6',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '3',
        isSold: true,
        isIndeterminate: false,
        model: false
      },
      {
        num: '12',
        isSold: true,
        isIndeterminate: false,
        model: false
      },
      {
        num: '10',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '5',
        isSold: true,
        isIndeterminate: false,
        model: false
      },
      {
        num: '14',
        isSold: true,
        isIndeterminate: false,
        model: false
      },
      {
        num: '13',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '7',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '16',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '15',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '9',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '18',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '17',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '11',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '21',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '20',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '19',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '25',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '24',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '23',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '22',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '27',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '26',
        isSold: false,
        isIndeterminate: false,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '-',
        isSold: false,
        isIndeterminate: true,
        model: false
      },
      {
        num: '28',
        isSold: false,
        isIndeterminate: false,
        model: false
      }
    ]
  }),
  methods: {
    next () {
      this.$emit('next')
    }
  },
  computed: {
    list () {
      let list = []
      this.y.forEach((item, index) => {
        let x = parseInt(index / 5)

        if (index % 5 === 0) {
          list.push([])
        }
        list[x].push(item)
      })
      return list
    }
  }
}
</script>
<style lang="scss">

#car-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

#car {
  display: inline-flex;
  flex-direction: column;
}
.row {
  display: flex;
  justify-content: center;
}
.checkbox.md-checkbox {
  margin: 8px;
}

.checkbox.md-checkbox .md-checkbox-container {
  width: 30px;
  height: 30px;
  overflow: hidden;
}

.checkbox.md-checkbox::after {
  content: attr(data-num);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-45%);
}

.checkbox.md-checkbox.md-indeterminate {
  visibility: hidden;
}

.checkbox.md-checkbox.md-checked {
  color: white;
}

.checkbox.md-checkbox.md-disabled .md-checkbox-container{
  background: #b9b9b9;
}

.checkbox.md-checkbox .md-checkbox-container:after {
  border: none;
  transform: none;
}

#symbols {
  display: flex;
  justify-content: center;
  margin: 15px 0;

  .checkbox.md-checkbox {
    display: flex;
    align-items: center;
  }
}

#check-btn {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}
</style>
