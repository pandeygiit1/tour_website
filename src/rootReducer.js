import { combineReducers } from "redux";
import {
  BlogpostReducer,
  BlogsidebarReducer,
} from "./Reducers/BlogSidebarReducer";
import {
  BlogDetailsReducer,
  BlogDetailsTourPackageReducer,
} from "./Reducers/BlogDetailsReducer";
import { PackageSidebarReducer } from "./Reducers/PackagesidebarReducer";
import {
  PackageDetailsReducer,
  PackagePlanDetailReducer,
  PackageImagesDetailReducer,
  ArticleByTourPkgDetailsReducer,
  TourPkgBookingDetailsReducer,
} from "./Reducers/PackageDetailReducer";
import { SearchCarReducer } from "./Reducers/SearchCarReducer";
import { availableCarReducer } from "./Reducers/AvailableCarReducer";
import { CarPopularTourReducer } from "./Reducers/CarPopularTourReducer";
import { NewsAndUpdatesReducer } from "./Reducers/NewsAndUpdateReducer";
import { CarsReducer } from "./Reducers/CarsReducer";
import { LoginReducers } from "./Reducers/Admin-Reducers/LoginReducers";
import {
  BlogFeaturedPostReducer,
  PackageFeaturedPostReducer,
  PackageFeaturedLocationReducer,
} from "./Reducers/TourFeaturedReducer";
import { addArticalReducer } from "./Reducers/Admin-Reducers/addArticleReducer";
import { draftArticalReducer } from "./Reducers/draftArticleReducer";
import { uploadImageReducer } from "./Reducers/Admin-Reducers/uploadImageReducer";
import {
  TourPkgLocationReducer,
  TourPkgByLocationReducer,
} from "./Reducers/TourPkgLocationReducer";
import { CityListReducer } from "./Reducers/CityReducer";
import { TouristPlaceDetailsReducer } from "./Reducers/TouristPlaceDetailsReducer";

export const rootReducer = combineReducers({
  BlogsidebarReducer: BlogsidebarReducer,
  BlogpostReducer: BlogpostReducer,
  BlogDetailsTourPackageReducer: BlogDetailsTourPackageReducer,
  BlogDetailsReducer: BlogDetailsReducer,
  PackageSidebarReducer: PackageSidebarReducer,
  PackageDetailsReducer: PackageDetailsReducer,
  PackageImagesDetailReducer: PackageImagesDetailReducer,
  PackagePlanDetailReducer: PackagePlanDetailReducer,
  ArticleByTourPkgDetailsReducer: ArticleByTourPkgDetailsReducer,
  TourPkgBookingDetailsReducer: TourPkgBookingDetailsReducer,
  SearchCarReducer: SearchCarReducer,
  availableCarReducer: availableCarReducer,
  CarPopularTourReducer: CarPopularTourReducer,
  NewsAndUpdatesReducer: NewsAndUpdatesReducer,
  CarsReducer: CarsReducer,
  LoginReducers: LoginReducers,
  BlogFeaturedPostReducer: BlogFeaturedPostReducer,
  PackageFeaturedPostReducer: PackageFeaturedPostReducer,
  PackageFeaturedLocationReducer: PackageFeaturedLocationReducer,
  addArticalReducer: addArticalReducer,
  draftArticalReducer: draftArticalReducer,
  uploadImage: uploadImageReducer,
  TourPkgLocationReducer: TourPkgLocationReducer,
  CityListReducer: CityListReducer,
  TourPkgByLocationReducer: TourPkgByLocationReducer,
  TouristPlaceDetailsReducer: TouristPlaceDetailsReducer,
});
