// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy visible interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/b7cab1f368f96d420fed92f7605c29cf.jpeg?lk3s=a5d48078&nonce=82933&refresh_token=52a9205e86ee6acb76fe131bd2619b8f&x-expires=1728442800&x-signature=MhRnfjNE4Ggjmdc1IKwD0c%2BHGgg%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>quocnguyenphu</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Quốc Nguyễn Phú</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
