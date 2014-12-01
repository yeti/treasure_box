from rest_framework import permissions


class IsBookmarkOwner(permissions.IsAuthenticated):
    """
    Only the object's owner can view or edit
    Assumes the model instance has a `user` attribute.
    """

    def has_object_permission(self, request, view, obj):
        print request.user
        return obj.category.user == request.user