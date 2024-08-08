import { useTheme } from '@mui/material';

type variationsTypes = 'primary' | 'light';
type iconProps = {
  variation: variationsTypes;
};

export function LoggiIcon({ variation }: iconProps) {
  const theme = useTheme();
  const variationsMapper: Record<variationsTypes, string> = {
    primary: theme.palette.primary.main,
    light: theme.palette.common.white,
  };
  const color = variationsMapper[variation] || variationsMapper.primary;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <g
        style={{
          fill: color,
          fillOpacity: 1,
          fillRule: 'evenodd',
          stroke: 'none',
          strokeWidth: 1,
        }}
      >
        <g
          style={{
            fill: color,
            fillOpacity: 1,
          }}
        >
          <g
            className="letters"
            style={{
              fill: color,
              fillOpacity: 1,
            }}
          >
            <path
              d="M0 18h11v-3.303H3.46V0H0zM18.05 14.902c-2.055-.014-3.51-1.555-3.488-3.693.023-2.128 1.467-3.603 3.526-3.6 2.077.001 3.508 1.498 3.499 3.66-.01 2.15-1.467 3.648-3.536 3.633zm.035-10.287c-3.841-.013-6.783 2.862-6.782 6.63 0 3.775 2.927 6.646 6.77 6.644 3.867-.003 6.775-2.85 6.774-6.631 0-3.798-2.882-6.629-6.762-6.643z"
              style={{
                fill: color,
                fillOpacity: 1,
              }}
              transform="translate(34 4.987)"
            />
            <path
              d="M35.765 11.307c-.027 2.13-1.476 3.61-3.532 3.595-2.056-.014-3.511-1.555-3.489-3.693.023-2.128 1.467-3.603 3.526-3.6 2.063.001 3.485 1.479 3.495 3.615v.083m-.003-5.789c-1.006-.57-2.192-.898-3.495-.903-3.841-.013-6.783 2.862-6.782 6.63 0 3.775 2.927 6.646 6.77 6.644a7.063 7.063 0 0 0 3.513-.91v1.433c-.01 2.152-1.466 3.645-3.535 3.645-2.657 0-3.825-2.574-3.825-2.574l-2.434 1.477s1.398 4.083 6.282 4.083c3.866-.002 6.774-2.85 6.773-6.63V4.605h-3.267v.913"
              mask="url(#mask-2)"
              style={{
                fill: color,
                fillOpacity: 1,
              }}
              transform="translate(34 4.987)"
            />
            <path
              d="M49.947 11.307c-.028 2.13-1.476 3.61-3.532 3.595-2.056-.014-3.511-1.555-3.489-3.693.023-2.128 1.467-3.603 3.526-3.6 2.062.001 3.484 1.479 3.495 3.615v.083m-.003-5.789c-1.006-.57-2.192-.898-3.495-.903-3.841-.013-6.783 2.862-6.782 6.63 0 3.775 2.927 6.646 6.77 6.644a7.062 7.062 0 0 0 3.513-.91v1.433c-.01 2.152-1.466 3.645-3.535 3.645-2.657 0-3.825-2.575-3.825-2.575l-2.434 1.478s1.398 4.083 6.282 4.083c3.866-.002 6.774-2.85 6.774-6.63V4.605h-3.268v.913"
              mask="url(#mask-4)"
              style={{
                fill: color,
                fillOpacity: 1,
              }}
              transform="translate(34 4.987)"
            />
            <path
              d="M57.876 4.605h-3.345v13.093h3.345zM56.204 3.342a1.673 1.673 0 1 0 0-3.346 1.673 1.673 0 0 0 0 3.346"
              mask="url(#mask-6)"
              style={{
                fill: color,
                fillOpacity: 1,
              }}
              transform="translate(34 4.987)"
            />
          </g>
          <g
            className="rabbit"
            style={{
              fill: color,
              fillOpacity: 1,
            }}
          >
            <path
              d="M-6.43 2.52a19.35 19.35 0 0 0-1.954-.863c-.113-.081-.185-.135-.185-.135s-4.43-3.169-6.384-3.99c-1.953-.823-5.35-2.612-8.799-2.515-2.723.076-4.404.582-4.991.723-.697.167-1.162.363-.4.723.256.12 1.345.768 2.667 1.523C-24.545-.911-22.116.418-21.06.659c1.01.232 2.675.571 4.802.526 2.427-.051 3.608.984 3.846 1.362-.434-.616-2.088-1.112-4.294-.976-2.123.131-3.83-.011-4.824-.307-1.947-.579-4.034-1.448-5.79-2.27a13.6 13.6 0 0 0-1.436.52c-.612.259-1.185.724-.326.966.614.174 6.355 2.227 8.026 2.327.95.057 2.509.113 4.428-.249 2.171-.41 3.302.482 3.567.827-.678 1.03-1.122 2.228-.995 3.56-7.938-1.4-10.472-2.125-12.264-2.433-3.134-.539-7.115 2.116-7.603 5.404-.277 1.868.2 3.613 1.334 5.228 1.257 1.787 2.91 3.329 3.15 3.656.154.28.104 1.018.115 1.514.012.558.713 1.059 1.122 1.096.243.022 4.943 1.49 4.943 1.49l6.963 2.143s.106-.48.127-.683c.053-.515-.339-1.786-1.97-2.261-2.403-.723-2.875-.86-3.386-1.014-.275-.082-.082-.087.344-.423.728-.617 1.351-1.45 1.67-2.127 1.42-3.022-.368-5.712-.368-5.712s1.117 1.172 1.536 3.222c.524 2.56-1.212 4.591-1.212 4.591l1.036.3s6.69-6.738 7.343-7.465c.552-.614 1.512-1.002 2-1.16 1.784-.518 4.015-1.518 4.583-1.877.567-.359 1.262-1.627 1.437-1.94.174-.314.403-.727.448-1.193.015-.164-.939-1.437-.939-1.437s-1.525-2.58-2.782-3.345M-25.9 23.28c-.395.236-.533.86.044 1.198.511.27 2.229-.672 2.229-.672l-1.723-.543s-.27-.114-.55.018"
              mask="url(#mask-6)"
              style={{
                fill: color,
                fillOpacity: 1,
              }}
              transform="translate(34 4.987)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
