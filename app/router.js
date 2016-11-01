import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('about');
  this.route('portfolio');
  this.route('team', function() {
    this.route('engineering');
    this.route('leadership');
  });
  this.route('contact');
});

export default Router;
