const pubsubUrl = 'wss://pubsub-edge.twitch.tv';
let ws; // Define ws globally
let reconnectInterval = 5000; // Reconnect delay in milliseconds

// Function to connect to Twitch PubSub
function connect() {
    ws = new WebSocket(pubsubUrl);

    ws.onopen = function() {
        console.log('Connected to Twitch PubSub');

        // Listen to channel point redemptions
        const message = {
            type: 'LISTEN',
            nonce: 'random-string',  // Just a random unique identifier
            data: {
                topics: [`channel-points-channel-v1.${userId}`],
                auth_token: oauthToken
            }
        };

        // Send the LISTEN message to Twitch PubSub
        ws.send(JSON.stringify(message));
    };

    ws.onmessage = function(event) {
        const message = JSON.parse(event.data);
        if (message.type === 'MESSAGE') {
            const msgData = JSON.parse(message.data.message);

            // Check if it's a channel point redemption event
            if (msgData.type === 'reward-redeemed') {
                const redemption = msgData.data.redemption;

                // Check if the redemption matches the specific reward ID
                handleChannelPointRedemption(redemption);
                console.log('Reward redeemed:', redemption.reward.title);
            }
        }
    };

    ws.onclose = function() {
        console.log('Disconnected from Twitch PubSub, attempting to reconnect...');
        setTimeout(connect, reconnectInterval); // Attempt to reconnect after a delay
    };

    ws.onerror = function(err) {
        console.error('WebSocket error:', err);
        ws.close(); // Close the connection to trigger the reconnection logic
    };
}

// Function to handle the channel point redemption
function handleChannelPointRedemption(redemption) {
    if (redemption.reward.title == redemptionName) {
        createThrowable();
    }
    if (redemption.reward.title == "Throwable (x50)") {
        for (let i = 0; i < 50; i++) {
            createThrowable();
        }
    }
}

// Initialize the connection
connect();