# Generated by Django 2.0.6 on 2018-06-16 19:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('semi_users', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Blog',
            new_name='User',
        ),
    ]