/**
 * Created by luiscachi on 6/18/2015.
 */


var er = new RegExp(/^the value .+ is not a valid e-mail\.$/);

er.test('the value leo@jala is not a valid e-mail');

er.test('the value leo@jala is not a valid e-mail;');

er.test('the value leo@jala is not a valid e-mail.');


var erdate = new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);