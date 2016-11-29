import classNames from 'classnames';
import Styles from '../../../css/app.scss';

/**
 * Returns string processed via classNames against our Styles
 * @param {...Strings/Objects}
 * @return {String}
 */

export default function css(...classes) {
  return classNames(classes.map(c => (typeof c === 'string' ? Styles[c] || c : css(...c))));
}
