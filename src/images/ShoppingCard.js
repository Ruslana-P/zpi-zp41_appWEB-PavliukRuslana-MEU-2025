const ShoppingCard = ({ color = "#3D3D3D" }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.1558 26.7444H9.89066C6.78905 26.7444 4.26569 23.443 4.26569 19.385V11.8416C4.26569 8.0693 2.82861 4.57758 0.421544 2.50112C-0.0107343 2.12825 -0.130077 1.36753 0.154921 0.801961C0.439919 0.236331 1.02131 0.0801274 1.45368 0.453126C2.82776 1.63848 3.94254 3.20186 4.73969 5.00185C4.91195 5.25433 6.30104 7.18066 8.57821 7.18066H19.3738C22.3191 7.1086 24.6245 10.9758 23.8544 14.6953L22.6117 21.1759C21.9829 24.4545 19.7394 26.7444 17.1558 26.7444ZM5.90415 8.94084C6.06001 9.8829 6.14068 10.8543 6.14068 11.8416V19.385C6.14068 22.0903 7.82292 24.2913 9.89066 24.2913H17.1558C18.8782 24.2913 20.3739 22.7647 20.793 20.5789L22.0358 14.0984C22.4933 11.8882 21.1233 9.59104 19.3738 9.63379H8.57817C7.54828 9.63379 6.65185 9.34328 5.90415 8.94084ZM9.42191 30.1174C9.42191 29.2707 8.89724 28.5842 8.25004 28.5842C6.69511 28.6652 6.69647 31.5704 8.25004 31.6506C8.89724 31.6506 9.42191 30.9642 9.42191 30.1174ZM18.75 30.1174C18.75 29.2707 18.2253 28.5842 17.5781 28.5842C16.0232 28.6652 16.0245 31.5704 17.5781 31.6506C18.2253 31.6506 18.75 30.9642 18.75 30.1174ZM20.3113 13.3135C20.3113 12.6361 19.8916 12.0869 19.3738 12.0869H8.95316C7.7093 12.1517 7.71023 14.4758 8.95316 14.5401H19.3738C19.8916 14.5401 20.3113 13.9909 20.3113 13.3135Z"
      fill={color}
    />
  </svg>
);

export default ShoppingCard;
