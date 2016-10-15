import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
public class AndroidPush {
     /**
     * Replace SERVER_KEY with your SERVER_KEY generated from FCM
     * Replace DEVICE_TOKEN with your DEVICE_TOKEN
     */
    private static String SERVER_KEY = "AIzaSyBVi03m49Ig9aM34SpkwOCjjiPhrrMoIeE";
    private static String DEVICE_TOKEN = "cBxWUojVygo:APA91bE2OgdCfWunzkDXa8W1jtk4OgGxkBzXITmUeCy6nsnTOM6ete5TerLNElKlre2uVvbwEfL8oOGXwT2oyYSUz4vEArY_NTI2XURip9iXFXLrSRRrWgGPZkqdmcL1eHOY86CUAI7N";
     /**
     * USE THIS METHOD to send push notification
     */
    public static void main(String[] args) throws Exception {
        String title = "My First Notification";
        String message = "Hello, I'm push notification";
        sendPushNotification(title, message);
    }
     /**
     * Sends notification to mobile
     * YOU DON'T NEED TO UNDERSTAND THIS METHOD
     */
    private static void sendPushNotification(String title, String message) throws Exception {
        String pushMessage = "{\"data\":{\"title\":\"" +
                title +
                "\",\"message\":\"" +
                message +
                "\"},\"to\":\"" +
                DEVICE_TOKEN +
                "\"}";
        // Create connection to send FCM Message request.
        URL url = new URL("https://fcm.googleapis.com/fcm/send");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestProperty("Authorization", "key=" + SERVER_KEY);
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestMethod("POST");
        conn.setDoOutput(true);
// Send FCM message content.
        OutputStream outputStream = conn.getOutputStream();
        outputStream.write(pushMessage.getBytes());
System.out.println(conn.getResponseCode());
        System.out.println(conn.getResponseMessage());
    }
}
