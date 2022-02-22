import classnames from 'classnames';

/*
 * @cln 自定义样式名
 *
 */
export default function SvgIcon({ name, prefix = 'icon', cln }) {
  const symbolId = `#${prefix}-${name}`;
  return (
    <svg className={classnames('svg-icon', cln ? cln : '')} aria-hidden='true'>
      <use href={symbolId} />
    </svg>
  );
}
