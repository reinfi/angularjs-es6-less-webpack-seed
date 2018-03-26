import template from './item-heart.component.html';
import controller from './item-heart.controller';
import './item-heart.less';

let component = {
    template,
    controller,
    bindings: {
        active: '<',
        onClick: '&',
    }
};

export default component;