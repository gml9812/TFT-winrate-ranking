export default class Component {
    $target;
    $props;
    $state;
    constructor($target, $props) {
      this.$target = $target;
      this.$props = $props;
      this.setup();
      this.setEvent();
      this.render();
    }
  
    setup() {};
  
    setEvent() {}
  
    addEvent(eventType, selector, callback) {
      const children = [...this.$target.querySelectorAll(selector)];
      const isTarget = (target) => children.includes(target) || target.closest(selector);
  
      this.$target.addEventListener(eventType, event => {
        if (!isTarget(event.target)) return false;
        callback(event);
      });
    }
  
    template() { return '';}
  
    mounted() {};
  
    render() {
      this.$target.innerHTML = this.template();
      this.mounted();
    }
  
    setState(newState) {
      this.$state = { ...this.$state, ...newState };
      this.render();
    }
  }
  