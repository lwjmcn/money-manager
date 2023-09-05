package com.moneymanager.widget;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.Log;
import android.widget.RemoteViews;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.moneymanager.MainActivity;
import com.moneymanager.R;

import org.json.JSONException;
import org.json.JSONObject;

public class FastInputWidget extends AppWidgetProvider  {
    private final String TAG = getClass().getSimpleName();

    private final String BTN_1_CLICK_ACTION = "com.moneyManager.widget.FastInputWidget.BTN_1_CLICK_ACTION";
    private final String BTN_2_CLICK_ACTION = "com.moneyManager.widget.FastInputWidget.BTN_2_CLICK_ACTION";
    private final String BTN_3_CLICK_ACTION = "com.moneyManager.widget.FastInputWidget.BTN_3_CLICK_ACTION";
    private final String BTN_4_CLICK_ACTION = "com.moneyManager.widget.FastInputWidget.BTN_4_CLICK_ACTION";

    static void updateAppWidget(Context context, AppWidgetManager appWidgetManager, int appWidgetId, RemoteViews remoteViews) {
        try {
            //Get Text from SharedPreferences of REACT NATIVE APP
            SharedPreferences sharedPreferences = context.getSharedPreferences("DATA", Context.MODE_PRIVATE);
            String appString = sharedPreferences.getString("appData", "{\"text\":'no data'}");
            JSONObject appData = new JSONObject(appString);

            //Construct RemoteViews object
            remoteViews.setTextViewText(R.id.button_1, appData.getString("text"));

            //Instruct widget manager to update widget
            appWidgetManager.updateAppWidget(appWidgetId, remoteViews);
        } catch (JSONException e) {
            e.printStackTrace();
        }

        // Instruct the widget manager to update the widget
        appWidgetManager.updateAppWidget(appWidgetId, remoteViews);
    }

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        // multiple widgets
        ComponentName thisWidget = new ComponentName(context, FastInputWidget.class);
        int[] allWidgetIds = appWidgetManager.getAppWidgetIds(thisWidget);

        for (int widgetId : allWidgetIds) {
            RemoteViews remoteViews = new RemoteViews(context.getPackageName(), R.layout.fast_input_widget);

            // button click listener, send intent
            remoteViews.setOnClickPendingIntent(R.id.button_1, getPendingSelfIntent(context, BTN_1_CLICK_ACTION));
            remoteViews.setOnClickPendingIntent(R.id.button_2, getPendingSelfIntent(context, BTN_2_CLICK_ACTION));
            remoteViews.setOnClickPendingIntent(R.id.button_3, getPendingSelfIntent(context, BTN_3_CLICK_ACTION));
            remoteViews.setOnClickPendingIntent(R.id.button_4, getPendingSelfIntent(context, BTN_4_CLICK_ACTION));

            updateAppWidget(context, appWidgetManager, widgetId, remoteViews);
        }
    }


    // click -> intent broadcasting
    protected  PendingIntent getPendingSelfIntent(Context context, String action) {
        Intent intent = new Intent(context, getClass());
        intent.setAction(action);
        return PendingIntent.getBroadcast(context, 0, intent, PendingIntent.FLAG_IMMUTABLE);
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        super.onReceive(context, intent);

        // broadcast listener
        if (BTN_1_CLICK_ACTION.equals(intent.getAction())){
            Log.d(TAG, "OPEN_PAGE_BTN_1");
            launchApp(context);
            emitMessageToReact(context, "OPEN_PAGE_BTN_1");
        } else if (BTN_2_CLICK_ACTION.equals(intent.getAction())){
            Log.d(TAG, "OPEN_PAGE_BTN_2");
            launchApp(context);
            emitMessageToReact(context, "OPEN_PAGE_BTN_2");
        } else if (BTN_3_CLICK_ACTION.equals(intent.getAction())){
            Log.d(TAG, "OPEN_PAGE_BTN_3");
            launchApp(context);
            emitMessageToReact(context, "OPEN_PAGE_BTN_3");
        } else  if(BTN_4_CLICK_ACTION.equals(intent.getAction())) {
            Log.d(TAG, "OPEN_PAGE_BTN_4");
            launchApp(context);
            emitMessageToReact(context, "OPEN_PAGE_BTN_4");
        }
    }

    // launch app
    private void launchApp(Context context) {
        Intent launchAppIntent = new Intent(context, MainActivity.class);
        launchAppIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(launchAppIntent);
    }

    // send messages to REACT NATIVE APP DeviceEventEmitter
    private void emitMessageToReact (Context context, String message) {

        ReactApplication reactApplication = (ReactApplication) context.getApplicationContext();
        ReactInstanceManager reactInstanceManager = reactApplication.getReactNativeHost().getReactInstanceManager();
        ReactContext reactContext = reactInstanceManager.getCurrentReactContext();
        if(reactContext != null) reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(message, null);

    }

    @Override
    public void onEnabled(Context context) {
        // Enter relevant functionality for when the first widget is created
    }

    @Override
    public void onDisabled(Context context) {
        // Enter relevant functionality for when the last widget is disabled
    }
}