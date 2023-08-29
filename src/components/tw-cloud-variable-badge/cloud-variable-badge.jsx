import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import cloudIcon from './clouddata.svg';
import CloudServerButton from './cloud-server-button.jsx';
import styles from './cloud-variable-badge.css';
import {APP_NAME} from '../../lib/brand';

const hosts = [
    {
        // Provided by GarboMuffin
        name: 'US East',
        cloudHost: 'wss://clouddata.turbowarp.org'
    },
    {
        // Provided by Apricot
        name: 'EU',
        cloudHost: 'wss://clouddata-eu.turbowarp.org'
    }
];

const CloudVariableBadge = props => (
    <div className={styles.badge}>
        <div className={styles.title}>
            <img
                className={styles.cloudIcon}
                src={cloudIcon}
                alt=""
                width={32}
                height={32}
            />
        </div>
        <div className={styles.text}>
            {
            // NOTE: cloud-variable-badge
            /* <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="This project uses cloud variables. TinyPatch uses its own cloud variable server independent of Scratch. Beware of impersonation as anyone can change their username to anything. {learnMore}"
                description="Cloud variable information shown under projects with cloud variables"
                id="tw.cloudVariableBadge"
                values={{
                    learnMore: (
                        <a
                            href="https://docs.turbowarp.org/cloud-variables"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FormattedMessage
                                defaultMessage="Learn more."
                                id="gui.alerts.cloudInfoLearnMore"
                            />
                        </a>
                    )
                }}
            /> */}
        </div>
    </div>
);

CloudVariableBadge.propTypes = {
    cloudHost: PropTypes.string,
    onSetCloudHost: PropTypes.func,
    onOpenChangeUsername: PropTypes.func
};

export default CloudVariableBadge;
