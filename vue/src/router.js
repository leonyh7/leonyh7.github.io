/**
 * Created by aresn on 16/8/22.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/chart': {
        name: 'chart',
        component: function(resolve) {
            require(['./views/chart.vue'], resolve);
        }
    }
};
export default routers;