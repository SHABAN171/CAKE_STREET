from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, CakeViewSet, OrderViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'cakes', CakeViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = router.urls
