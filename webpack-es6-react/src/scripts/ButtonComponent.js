var React = require('react');

var ButtonComponent = React.createClass({
    getDragonKillingSword: function(){
        //送宝刀
        alert("您获得了一把屠龙宝刀！");
    },
    render: function(){
        return (<button onClick={this.getDragonKillingSword}>屠龙宝刀，点击就送</button>);
    }
});
module.exports = ButtonComponent;