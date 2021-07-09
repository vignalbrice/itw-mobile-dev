package com.myrandomapp;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class HotelRoom extends ReactContextBaseJavaModule {
   HotelRoom(ReactApplicationContext context) {
       super(context);
   }
   @Override
    public String getName() {
      return "HotelRoom";
    }

    public void getNbSommeEntiers(Integer[] args) {
      int i = 0;
      for(int nbSomme = 1; nbSomme <= 100; nbSomme++) {
        i = i + nbSomme;
      }
      System.out.println(i);
    }
}