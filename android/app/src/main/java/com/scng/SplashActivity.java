package com.scng;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedStateInstance) {
        super.onCreate(savedStateInstance);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}